const getAgeFromNameReq = async (name) => {
    const startTime = performance.now();
    return axios.get(`https://api.agify.io/?name=${name}`)
        .then((response) => ({
            data: response.data,
            time: performance.now() - startTime
        }))
}
const getGenderFromNameReq = async (name) => {
    const startTime = performance.now();
    return axios.get(`https://api.genderize.io?name=${name}`)
        .then((response) => ({
            data: response.data,
            time: performance.now() - startTime
        }))
}

const getNationalityFromNameReq = async (name) => {
    const startTime = performance.now()
    return axios.get(`https://api.nationalize.io/?name=${name}`)
        .then((response) => ({
            data: response.data,
            time: performance.now() - startTime
        }))
}

const getRandomDogImageReq = async () => {
    const startTime = performance.now()
    return axios.get('https://dog.ceo/api/breeds/image/random')
        .then((response) => ({
            data: response.data,
            time: performance.now() - startTime
        }))
}

const getIpReq = async () => {
    const startTime = performance.now()
    return axios.get('https://api.ipify.org/?format=json')
        .then((response) => ({
            data: response.data,
            time: performance.now() - startTime
        }))
}

const getCountryFromIpReq = async (ip) => {
    const startTime = performance.now()
    return axios.get(`https://ipapi.co/${ip}/json/`)
        .then((response) => ({
            data: response.data,
            time: performance.now() - startTime
        }))
}

const getRandomActivityReq = async () => {
    const startTime = performance.now()
    return axios.get('https://www.boredapi.com/api/activity')
        .then((response) => ({
            data: response.data,
            time: performance.now() - startTime
        }))
}

