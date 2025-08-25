// ew have to wait when any code is in the async condition because we don't when will it's answer 
// will come that's why we use await

async function xyz() {
    let raw = await fetch(`https://randomuser.me/api/`)
    let ans = await raw.json()
    console.log(ans)
}

xyz()