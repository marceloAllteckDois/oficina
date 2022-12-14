import { DataSource } from "typeorm"

const dataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "car123",
    database: "oficina",
    migrations: [
        "./src/shared/typeorm/migrations/*.ts"
    ],
});

dataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

export default dataSource;