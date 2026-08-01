const app = require("./src/app");

const server = app.listen(0, async () => {
  const port = server.address().port;
  const base = `http://localhost:${port}`;
  const call = (method, p, body) =>
    fetch(base + p, {
      method,
      headers: { "Content-Type": "application/json" },
      body: body ? JSON.stringify(body) : undefined,
    }).then(async (r) => ({ status: r.status, body: await r.json().catch(() => null) }));

  console.log("GET vacio ->", await call("GET", "/api/tasks"));
  console.log("POST sin title ->", await call("POST", "/api/tasks", {}));
  console.log("POST valido ->", await call("POST", "/api/tasks", { title: "Demo", description: "x" }));
  console.log("GET lista ->", await call("GET", "/api/tasks"));
  console.log("PUT ->", await call("PUT", "/api/tasks/1", { done: true }));
  console.log("DELETE ->", await call("DELETE", "/api/tasks/1"));
  server.close();
});
