let myLeads = []

const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")


// localStorage.clear()
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// const tabs = [
//     {url: "https://wwww.via.placeholder.com/200"}
// ]

tabBtn.addEventListener("click", function(){

    chrome.tabs.query({active: true, currentWindow: true }, function(tabs){
        // let activeTab = tabs[0]
        // let activeTabId= activeTab.id
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

 

})



function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] + " '>" + myLeads[i] + "</a></li>"
        listItems += `
         <li>
            <a target='_blank' href='${leads[i]}'>
            ${leads[i]} 
            </a>
         </li>
         `
        //    const li = document.createElement("li")
        //    li.textContent= myLeads[i]
        //    ulEl.append(li)
    }
    ulEl.innerHTML = listItems

}



deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)


})



