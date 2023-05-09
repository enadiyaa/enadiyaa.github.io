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


}


