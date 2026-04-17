import Mysql2 from "mysql2/promise";
import Express from "express";
import Cors from "cors";

const app = Express();
app.use(Cors());
app.use(Express.json());

const pool = Mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "diaknyilvantartas"
});

app.get("/students", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM diakok");
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


app.post("/students/add", async (req, res) => {
    const { nev, szuletesi_datum, osztaly } = req.body;
    try {
        const [result] = await pool.query("INSERT INTO diakok (nev, szuletesi_datum, osztaly) VALUES (?, ?, ?)", [nev, szuletesi_datum, osztaly]);
        res.json({ id: result.insertId, nev, szuletesi_datum, osztaly });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.put("/students/update/:id", async (req, res) => {
    const { id } = req.params;
    const { nev, szuletesi_datum, osztaly } = req.body;
    try {
        await pool.query("UPDATE diakok SET nev = ?, szuletesi_datum = ?, osztaly = ? WHERE id = ?", [nev, szuletesi_datum, osztaly, id]);
        res.json({ message: "Student updated successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.delete("/students/:id", async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query("DELETE FROM diakok WHERE id = ?", [id]);
        res.json({ message: "Student deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});