export default function Form(){

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(e.target[0].value)
    }

    async function handleApiRequest(){
        const response = await fetch("/api/url", {
            method: "GET", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify({user: data})
        })
        return await response.json()
    }

    return(
        <form className="form" onSubmit={handleFormSubmit}>
            <input type="text" />
            <button type="submit">Submit API Request</button>
        </form>
    )
}