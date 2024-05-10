import { json } from "@sveltejs/kit";

export async function POST({ request }) {
    const body = await request.formData()
    const name = body.get("name")
    const email = body.get("email")
    const message = body.get("message")
    const privacy = body.get("privacy")

    if (name == "") return json({ error: "name"}, {
        status: 500
    })
    if (email == "") return json({ error: "email"}, {
        status: 500
    })
    if (message == "") return json({ error: "message"}, {
        status: 500
    })
    if (privacy == "" || privacy == "false") return json({ error: "privacy"}, {
        status: 500
    })

    const googleurl = `https://docs.google.com/forms/d/e/1FAIpQLSfyYrYSRy_guWcCBKF0wAfPqhZzxQT3ofOjqE8iJLZvqsxQ3w/formResponse?&submit=Submit&usp=pp_url&entry.866128707=${name}&entry.1166196952=${email}&entry.1215915974=${message}&entry.431160396=${privacy}`;

    const res = await fetch(googleurl)
    if (res.status == 200)
        return json({ message: "Nachricht versendet" })
    else
        return json(undefined, {status: 500})
}