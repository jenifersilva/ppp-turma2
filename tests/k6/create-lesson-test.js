import http from "k6/http";
import { expect } from "https://jslib.k6.io/k6-testing/0.5.0/index.js";
import { group } from "k6";

export const options = {
  vus: 10, // 10 usuários simulados ao mesmo tempo
  duration: "30s", // teste dura 30 segundos
  //iterations: 10, // cada usuário vai executar o teste 10 vezes
  thresholds: {
    http_req_duration: [
      "p(90)<=6", // 90% das requisições precisam ser ≤ 6 ms
      "p(95)<=7", // 95% das requisições precisam ser ≤ 7 ms
    ],
    http_req_failed: ["rate<0.01"], // taxa de erro precisa ser < 1%
  },
};

export default function () {
  let token = "";
  let responseLessons = "";

  group("Login", () => {
    let responseInstructorLogin = http.post(
      "http://localhost:3000/instructors/login",
      JSON.stringify({
        email: "jenifer@email.com",
        password: "123456",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    token = responseInstructorLogin.json("token");
  });

  group("Register Lesson", () => {
    responseLessons = http.post(
      "http://localhost:3000/lessons",
      JSON.stringify({
        title: "Como montar a flauta transversal",
        description:
          "Montando as três partes da flauta transversal e alinhamento as peças",
      }),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  });

  group("Verify response", () => {
    expect(responseLessons.status, "status deve ser 201").toBe(201);
  });
}
