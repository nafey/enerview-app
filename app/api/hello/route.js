export async function GET() {

	const stage = process.env.STAGE;
	return new Response(JSON.stringify({ message: "Hello from App Router API. Stage is " + stage }), {
		status: 200,
		headers: { "Content-Type": "application/json" },
	});
}