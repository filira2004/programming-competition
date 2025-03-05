// import postgres from "postgres";

// const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// async function getQuery() {
//   const data = await sql`
//     SELECT * FROM coaches
//   `;

//   return data;
// }

// export async function GET() {
//   try {
//     return Response.json(await getQuery());
//   } catch (error) {
//     return Response.json({ error }, { status: 500 });
//   }
// }
