const URL = "https://botfilter-h5ddh6dye8exb7ha.centralus-01.azurewebsites.net";

export async function Apply ({uuid,candidateId, jobId, repoUrl}){
    const payload = {
        uuid,
        candidateId,
        jobId,
        repoUrl
    };

    console.log ("Sending payload...", payload);
    const response = await fetch (`${URL}/api/candidate/apply-to-job`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!response.ok) {
        throw new Error("Error:Apply didnt work");
    }

return response.json();

}