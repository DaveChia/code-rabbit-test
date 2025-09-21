const request = require('supertest');
const app = require('./index');

describe('Sample Test Suite', () => {
    test('hello world!', () => {
        expect(1 + 1).toBe(2);
    });
});
describe('GET /todos', () => {
    test('should return the list of todos', async () => {
        const res = await request(app).get('/todos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThanOrEqual(2);
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('task');
        expect(res.body[0]).toHaveProperty('done');
    });
});

describe('POST /todos', () => {
    test('should add a new todo and return it', async () => {
        const newTodo = { task: 'Test POST endpoint', done: false };
        const res = await request(app)
            .post('/todos')
            .send(newTodo)
            .set('Accept', 'application/json');
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('id');
        expect(res.body.task).toBe(newTodo.task);
        expect(res.body.done).toBe(newTodo.done);

        // Optionally verify the todo was added
        const getRes = await request(app).get('/todos');
        const added = getRes.body.find(todo => todo.task === newTodo.task);
        expect(added).toBeDefined();
    });
});