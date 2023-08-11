let input = document.querySelector("input");

let url = "https://api.github.com/users/";

const get = (element) => document.getElementById(`${element}`);

let btn = get("btn");
let dateSegment;

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        if (input.value !== "") {
            userData(url + input.value);
        }
    }
}, false);

btn.addEventListener("click", () => {
    if (input.value !== "") {
        userData(url + input.value);
    }
})

async function userData(url) {
    let res = await axios.get(url);
    let data = res.data;
    console.log(data);
    userInfo(data);
}

function userInfo(data) {

    if (data.message !== "Not Found") {
        function checkNull(apiItem, domItem) {
            if (apiItem === "" || apiItem === null) {
                domItem.style.opacity = 0.5;
                domItem.previousElementSibling.style.opacity = 0.5;
                return false;
            }
            else {
                return true;
            }
        }
    }

    let image = get("image");
    let name = get("name");
    let userName = get("username");
    let Joined = get("joined");
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let bio = get("bio");
    let repo = get("repo");
    let followers = get("followers");
    let following = get("following");

    let location = get("location");
    let twitter = get("twitter");
    let website = get("website");
    let company = get("company");



    image.src = `${data.avatar_url}`;
    name.innerText = `${data.name}`;
    userName.innerText = `@${data?.login}`;
    dateSegment = data?.created_at.split("T").shift().split("-");
    Joined.innerText = `Joined ${dateSegment[2]} ${month[dateSegment[1] - 1]} ${dateSegment[0]}`;
    bio.innerText = (data?.bio === null) ? "This profile has no Bio" : data?.bio;
    repo.innerText = `${data?.public_repos}`
    followers.innerText = `${data?.followers}`
    following.innerText = `${data?.following}`
    location.innerText = checkNull(data?.location, location) ? data?.location : "Not Available";
    twitter.innerText = (data?.twitter_username, twitter) ? data?.twitter_username : "Not Available";
    twitter.href = checkNull(data?.twitter_username, twitter) ? `https://twitter.com/${data?.twitter_username}` : "#";
    website.innerText = checkNull(data?.blog, website) ? data?.blog : "Not Available";
    website.href = checkNull(data?.blog, website) ? data?.blog : "#";
    company.innerText = checkNull(data?.company, company) ? data?.company : "Not Available";



}

