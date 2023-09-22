



function aa() {

    items = [
        {
            name: "Matheus",
            age: 28,
            sport: "football"
        },
        {
            name: "William",
            age: 34,
            sport: "basketball"
        },
    ]

    const users = document.getElementById("users");
    users.innerHTML="";

    for(var i of items) {
        users.innerHTML += 
        `
        <div class="userInfo"><span>${ i.name }</span> is ${ i.age } years old and likes ${ i.sport }.</div>
        `;
    }
}

async function submit() {
    const res = await fetch("http://localhost:4005/users");

    res.json().then(u => {
        
        console.log(u);

        const users = document.getElementById("users");
        users.innerHTML="";

        for(var i of u) {
            users.innerHTML += 
            `
            <div class="userInfo"><span>${ i.firstName }</span> (${ i.age }${ i.sex }).</div>
            `;
        }
    });

    
}

async function getByID(event) {
    console.log("aa");

    const id = document.getElementById("lookupID").value;

    const res = await fetch(`http://localhost:4005/users/` + id);
 
    res.json().then(u => {
        
        const users = document.getElementById("users");
        users.innerHTML="";

        users.innerHTML += 
        `
        <div class="userInfo"><span>${ u.firstName }</span> (${ u.age }${ u.sex }).</div>
        `;

        console.log(u);
    });
}