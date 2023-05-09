// import data from './handsdata.json' assert { type: 'json' };
window.onload = async function () {
    const response = await fetch("./handsdata.json");
    const data = await response.json();
    const scrollcontainer = document.getElementById("scrollcontainer")
    data.forEach(item => {
        const element = document.createElement("div")
        element.className = "scrollcontaineritem"
        // element.innerText=item.dba+item.boro+item.street+item.zipcode
        element.append(item.dba)
        element.append(document.createElement('br'))
        // element.append(' ')
        element.append(item.boro)
        element.append(' ')
        element.append(item.street)
        element.append(document.createElement('br'))
        element.append(item.zipcode)
        scrollcontainer.appendChild(element)
    })
    const response2 = await fetch("./ratsdata.json");
    const data2 = await response2.json();
    const scrollcontainer2 = document.getElementById("scrollcontainer2")
    data2.forEach(item => {
        const element = document.createElement("div")
        element.className = "scrollcontaineritem"
        // element.innerText=item.dba+item.boro+item.street+item.zipcode
        element.append(item.dba)
        element.append(document.createElement('br'))
        // element.append(' ')
        element.append(item.boro)
        element.append(' ')
        element.append(item.street)
        element.append(document.createElement('br'))
        element.append(item.zipcode)
        scrollcontainer2.appendChild(element)

    })
    const response3 = await fetch("./micedata.json");
    const data3 = await response3.json();
    const scrollcontainer3 = document.getElementById("scrollcontainer3")
    data3.forEach(item => {
        const element = document.createElement("div")
        element.className = "scrollcontaineritem"
        // element.innerText=item.dba+item.boro+item.street+item.zipcode
        element.append(item.dba)
        element.append(document.createElement('br'))
        // element.append(' ')
        element.append(item.boro)
        element.append(' ')
        element.append(item.street)
        element.append(document.createElement('br'))
        element.append(item.zipcode)
        scrollcontainer3.appendChild(element)

})
const response4 = await fetch("./dirtykitchen.json");
const data4 = await response4.json();
const scrollcontainer4 = document.getElementById("scrollcontainer4")
data4.forEach(item => {
    const element = document.createElement("div")
    element.className = "scrollcontaineritem"
    // element.innerText=item.dba+item.boro+item.street+item.zipcode
    element.append(item.dba)
    element.append(document.createElement('br'))
    // element.append(' ')
    element.append(item.boro)
    element.append(' ')
    element.append(item.street)
    element.append(document.createElement('br'))
    element.append(item.zipcode)
    scrollcontainer4.appendChild(element)

})

}



