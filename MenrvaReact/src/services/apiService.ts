export async function fetchTest () {
    const response = await fetch("http://localhost:8085/api/test");
    console.log(response.text());
}