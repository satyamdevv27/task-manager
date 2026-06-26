import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import app from "../app.js";
import connectDB from "../config/db.js";

beforeAll(async () => {
  await connectDB();
});

describe("Task API", () => {

  it("GET /api/tasks should return all tasks", async () => {

    const res = await request(app).get("/api/tasks");

    expect(res.statusCode).toBe(200);
    expect(res.body.success).toBe(true);

  });

  it("POST /api/tasks should create a new task", async () => {

    const res = await request(app)
      .post("/api/tasks")
      .send({
        title: "Vitest Task",
        description: "Created from test",
        status: "pending",
        priority: "high",
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.title).toBe("Vitest Task");

  });

  it("POST /api/tasks should fail when title is missing", async () => {

    const res = await request(app)
      .post("/api/tasks")
      .send({
        description: "No title",
        status: "pending",
        priority: "high",
      });

    expect(res.statusCode).toBe(400);
    expect(res.body.success).toBe(false);

  });

});