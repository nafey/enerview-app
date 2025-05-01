import connectDB from "../../../models/db.js";
import User from "../../../models/Users.js";

const run = async () => {
  await connectDB();

  // Fetch the first user
  const user = await User.findOne();
  return user;
};

export async function GET() {
  const stage = process.env.STAGE;
  const out = await run();

  return new Response(
    JSON.stringify({
      message: "Hello from App Router API. Stage is " + stage,
      user: out,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
