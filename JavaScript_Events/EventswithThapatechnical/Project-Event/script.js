 //! create with me
 //* Function to create a periodic table element

 //* Event handler for periodic table element click
 //  function handleEvent(e) {
 //      const targetElem = e.target;

 //      alert(targetElem.innerText)
 //  }

 //* Function to initialize the periodic table
 //  function initializePeriodicTable() {
 //      const mainBody = document.querySelector(".mainBody");


 //      // Create 50 periodic table elements
 //      for (let i = 1; i <= 50; i++) {
 //          const element = document.createElement("div");
 //          element.innerText = `Elem${i}`;
 //          element.classList.add('element');
 //          mainBody.append(element);
 //      };

 //      // Add event delegation to the container
 //      mainBody.addEventListener("click", handleEvent)
 //  }


 //  // Initialize the periodic table
 //  initializePeriodicTable();


 //! second trika

 // Function to create a periodic table element
 const createPeriodicElement = (symbol, atomicNumber, name) => {
     const element = document.createElement("div");
     element.classList.add('element');
     element.innerText = symbol;

     element.setAttribute("data-atomic-number", atomicNumber)
     element.setAttribute("data-atomic-name", name)

     return element
 }

 // Event handler for periodic table element click
 const handleElementClick = (e) => {
     const target = e.target;
     if (target.classList.contains('element')) {
         const atomicNumber = target.getAttribute("data-atomic-number");
         const elementName = target.getAttribute("data-atomic-name");
         alert(`Atomic Number: ${atomicNumber}\nElement Name: ${elementName}`)
     }
 }

 // Function to initialize the periodic table
 function initializePeriodicTable() {
     const mainBody = document.querySelector(".mainBody");


     // Create 50 periodic table elements
     for (let i = 1; i <= 50; i++) {
         const element = createPeriodicElement(`Elem${i}`, i, `Element ${i}`)
         mainBody.append(element);
     };

     // Add event delegation to the container
     mainBody.addEventListener("click", handleElementClick)
 }


 // Initialize the periodic table
 initializePeriodicTable();