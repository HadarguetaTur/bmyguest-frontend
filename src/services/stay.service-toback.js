import { httpService } from "./http.service.js"

const ENDPOINT = "stay"

const gLabels = [
  "Amazing pools",
  "Beach",
  "Camping",
  "Desert",
  "Amazing views",
  "Parks",
  "Cabins",
  "Design",
  "Islands",
  "OMG!",
  "Arctic",
  "Lakefront",
  "Tropical",
  "Breakfasts",
  "Chef's Kitchens",
  "Ski-in",
  "Windmills",
  "Mansions",
]

export const stayService = {
  query,
  remove,
  save,
  getById,
  getLabels,
  updateWished,
  getHostStays,
}

async function query(filterBy = {}) {
  return await httpService.get(ENDPOINT, filterBy)
}

async function getById(stayId) {
  return await httpService.get(`${ENDPOINT}/${stayId}`)
}

async function getHostStays(id) {
  try {
    const stays = await httpService.get(ENDPOINT)
    const stayByHost = stays.filter((stay) => stay.host.id === id)
    return stayByHost
  } catch (err) {
    console.log("Cannot load stays from store", err)
    throw err
  }
}

async function save(stay) {
  const savedStay = stay._id
    ? await httpService.put("stay", stay)
    : await httpService.post("stay", stay)
  return savedStay
}

async function remove(stayId) {
  return await httpService.delete(`${ENDPOINT}/${stayId}`)
}

function getLabels() {
  return gLabels
}

function updateWished(newStay) {
  save(newStay)
}
