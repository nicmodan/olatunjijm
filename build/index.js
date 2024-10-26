// let getUserinfo = localStorage.getItem("adminDate")
// let jsonGetUserInfo = JSON.parse(getUserinfo)

const getAccountInfo = async ()=>{
  try {

    const handeLocalhostLocation = 'https://olatunjijmbackend.onrender.com/api/' // `http://localhost:3001/api/` // https://olatunjijmbackend.onrender.com/api/
    // const response = await fetch(`${handeLocalhostLocation}account/${jsonGetUserInfo?.email}`)
    const response = await fetch(`${handeLocalhostLocation}account/${"olatunjiJm@modanmic.com"}`)
    // olatunjiJm@modanmic.com
    // const response = // await fetch("http://localhost:3001/api/users/modanmic")
    let responseData = await response.json();
    // console.log(data.usernameInfo)
    // console.log(response)

    if (response.status === 200) {
      // console.log(responseData?.account)
      // jsonGetUserInfo = responseData?.account
      // localStorage.setItem("adminDate", JSON.stringify(responseData?.account))

      return responseData?.account
    } else {
      console.log(responseData.error)

    }

  } catch (e) {
    console.log(e)
    // displayErrorScreen("NETWORK ERROR")
  }

}
// getAccountInfo()

const result = async()=>{
  const jsonGetUserInfo = await Promise.all([getAccountInfo()])
  // localStorage.setItem("adminDate", JSON.stringify(jsonGetUserInfo[0]))
  if (jsonGetUserInfo[0]) {

    let getUserinfo = localStorage.getItem("adminDate")
    // let jsonGetUserInfoMian = JSON.parse(getUserinfo)
    // const getCurrentLoc = window.location.href.split('/')
    // const getPageName = getCurrentLoc[getCurrentLoc.length-1].split('?')[0]
    localStorage.setItem("adminDate", JSON.stringify(jsonGetUserInfo[0]))

    console.log(jsonGetUserInfo[0])
    console.log(!getUserinfo)

    if (!getUserinfo) {
      location.reload();
    }

    // let getUserinfo = localStorage.getItem("adminDate")
    // let jsonGetUserInfo = JSON.parse(getUserinfo)
    // getResult()
    // console.log(jsonGetUserInfo[0])
    // window.location.replace(`./${getPageName}`)

  }
  // console.log(jsonGetUserInfo)
}
result()
let getUserinfo = localStorage.getItem("adminDate")
let jsonGetUserInfo = JSON.parse(getUserinfo)

// console.log( jsonGetUserInfo )

const convertArrayToObJ = (arrVal) =>{
  const newObj = {}
  arrVal.map(val=>{
    const newName = val.image_name.replaceAll(" ", "_")
    newObj[newName] = {
      image_name: val.image_name,
      image_url: val.image_url
    }
  })
  return newObj
}

console.log(convertArrayToObJ(jsonGetUserInfo.concreteProducts))

const concreateImages = convertArrayToObJ(jsonGetUserInfo.concreteProducts)
const equpmentObjList = convertArrayToObJ(jsonGetUserInfo.equipmentRental)
const gallaryImage = convertArrayToObJ(jsonGetUserInfo.gallary)
const sallersSupplyImg = convertArrayToObJ(jsonGetUserInfo.salesSupply)
// const equpmentObjList = {
//   // assets\equpment_images\backhoe.png
//   columnsSteelFormwork: {
//     equpment: "Columns Steel formwork",
//     equipment_ulr: "assets/equpment_images/Columns_Steel_formwork.png"
//   },
//   Scaffolds: {
//     equpment: "Scaffolds",
//     equipment_ulr: "assets/equpment_images/Scaffolds.jpg"
//   },
//   backhoe: {
//     equpment: "Backhoe Loaders",
//     equipment_ulr: "assets/equpment_images/backhoe.png"
//   },
//   Scaffolds: {
//     equpment: "Scaffolds",
//     equipment_ulr: "assets/equpment_images/Scaffolds.jpg"
//   },
//   concrete_mixers: {
//     equpment: "Concrete Mixers",
//     equipment_ulr: "assets/equpment_images/Concrete-Mixers.png"
//   },
//   crane: {
//     equpment: "Grove Crane",
//     equipment_ulr: "assets/equpment_images/crane.png"
//   },
//   dump_truck: {
//     equpment: "Dump Truck",
//     equipment_ulr: "assets/equpment_images/Dump_Truck.png"
//   },
//   excavator: {
//     equpment: "Excavator",
//     equipment_ulr: "assets/equpment_images/excavator.png"
//   },
//   movableScaffolds: {
//     equpment: "Movable Scaffolds",
//     equipment_ulr: "assets/equpment_images/Movable_scaffolds.png"
//   },
//   grader_1: {
//     equpment: "Motor Grader",
//     equipment_ulr: "assets/equpment_images/Grader-1.png"
//   },
//   haammers: {
//     equpment: "Dewalt Demolition Hammer",
//     equipment_ulr: "assets/equpment_images/Haammers.png"
//   },
//   hand_compactors: {
//     equpment: "Hand Compactors",
//     equipment_ulr: "assets/equpment_images/Hand-Compactors.jpg"
//   },
//   miningtruck: {
//     equpment: "Articulated Dumb Truck",
//     equipment_ulr: "assets/equpment_images/miningtruck.png"
//   },
//   road_saws: {
//     equpment: "Road Saws",
//     equipment_ulr: "assets/equpment_images/Road-Saws.png"
//   },
//   roller: {
//     equpment: "Roller",
//     equipment_ulr: "assets/equpment_images/Roller.jpg"
//   },
//   wheel_loader: {
//     equpment: "Wheel Loader",
//     equipment_ulr: "assets/equpment_images/wheel-loader.png"
//   },
// }

// const gallaryImage = {
//   mainOfficeYard: {
//     eventName: "Main Office and Yard",
//     eventName_url: "assets/gallary/Main-Office-and-yard.jpg"
//   },
//   floors4_hotel: {
//     eventName: "Construction of 4 floors hotel building at Abeokuta",
//     eventName_url: "assets/gallary/Construction-of-4-floors-hotel-building-at-Abeokuta.jpg"
//   },
//   modificationOfCACHosannaChapel: {
//     eventName: "Modification of CAC Hosanna Chapel Ikorogboji Agbara Estate",
//     eventName_url: "assets/gallary/Modification-of-CAC-Hosanna-Chapel-Ikorogboji-Agbara-Estate.jpg"
//   },
//   wallAndFloorTilesWorks: {
//     eventName: "Wall and Floor Tiles Works",
//     eventName_url: "assets/gallary/Wall-and-floor-tiles-works.jpg"
//   },
//   coldroom_front: {
//     eventName: "Coldroom Front",
//     eventName_url: "assets/gallary/Coldroom-Front.jpg"
//   },
//   pool: {
//     eventName: "Pool",
//     eventName_url: "assets/gallary/Pool.jpg"
//   },
//   duplex: {
//     eventName: "Duplex",
//     eventName_url: "assets/gallary/Duplex.jpg"
//   },
//   reinforcements: {
//     eventName: "Reinforcements",
//     eventName_url: "assets/gallary/Reinforcements.jpg"
//   },
//   coldroom_side: {
//     eventName: "Coldroom Side",
//     eventName_url: "assets/gallary/Coldroom-Side.jpg"
//   },
//   coldroom: {
//     eventName: "Coldroom",
//     eventName_url: "assets/gallary/Coldroom.jpg"
//   },
//
//   flooring: {
//     eventName: "Flooring",
//     eventName_url: "assets/gallary/Flooring.jpg"
//   },
//   fountain: {
//     eventName: "Fountain",
//     eventName_url: "assets/gallary/Fountain.jpg"
//   },
//   john: {
//     eventName: "John",
//     eventName_url: "assets/gallary/John.jpg"
//   },
//   picture31: {
//     eventName: "Picture31",
//     eventName_url: "assets/gallary/Picture31.jpg"
//   },
//   power_project: {
//     eventName: "Power Project",
//     eventName_url: "assets/gallary/Power-Project.jpg"
//   },
//   under_Construction_2: {
//     eventName: "Under Construction 2",
//     eventName_url: "assets/gallary/Under-Construction-2.jpg"
//   },
//   under_construction: {
//     eventName: "Under Construction",
//     eventName_url: "assets/gallary/Under-Construction.jpg"
//   }
// }


// const concreateImages = {
//   pad_Stones: {
//     concreatName: "Pad Stones",
//     concreate_url: "../assets/Services/Pad-Stones.png"
//   },
//   blocks: {
//     concreatName: "blocks",
//     concreate_url: "../assets/Services/blocks-1.png"
//   },
//   interlocking2: {
//     concreatName: "Interlocking 2",
//     concreate_url: "../assets/Services/Interlocking-2.jpg"
//   },
//   concrete_Blocks: {
//     concreatName: "6 Concrete Blocks",
//     concreate_url: "../assets/Services/6-Concrete-Blocks.jpg"
//   },
//   concrete_pipes: {
//     concreatName: "Concrete Pipes",
//     concreate_url: "../assets/Services/Concrete-Pipes.png"
//   },
//   interlocking: {
//     concreatName: "Interlocking",
//     concreate_url: "../assets/Services/Interlocking.png"
//   },
//   custom_precast_concrete: {
//     concreatName: "Custom Precast Concrete",
//     concreate_url: "../assets/Services/Custom-Precast-Concrete.png"
//   },
//   inter_lock_stones: {
//     concreatName: "Inter Lock Stones",
//     concreate_url: "../assets/Services/Inter-Lock-Stones.png"
//   },
//   concrete_blocks9: {
//     concreatName: "9 Concrete Blocks",
//     concreate_url: "../assets/Services/9-Concrete-Blocks.jpg"
//   },
//   // picture7: {
//   //   eventName: "Picture7",
//   //   eventName_url: "../assets/gallary/Picture7.jpg"
//   // },
//   // picture8: {
//   //   eventName: "Picture8",
//   //   eventName_url: "../assets/gallary/Picture8.jpg"
//   // }
//
// }

// const sallersSupplyImg = {
//   // assets\Services\
//   wood: {
//     sallersSupplyName: "Woods",
//     sallersSuppl_url: "../assets/Services/Wood.png"
//   },
//   // sand38: {
//   //   sallersSupplyName: "3 8 Sand",
//   //   sallersSuppl_url: "../assets/Services/3-8-Sand.jpg"
//   // },
//   // woodDoor: {
//   //   sallersSupplyName: "Wooden Door",
//   //   sallersSuppl_url: "../assets/Services/Door-PNG-File.png"
//   // },
//   metalAluminonWoodenDoor: {
//     sallersSupplyName: "Metal, Aluminon & Wooden Door",
//     sallersSuppl_url: "../assets/Services/metal-aluminon-wooden-door.PNG"
//   },
//   // assets\Services\sharp-granites-plaster-sand.PNG
//   granitesSharpPlasterSand: {
//     sallersSupplyName: "Granites, Sharp & plaster sand",
//     sallersSuppl_url: "../assets/Services/sharp-granites-plaster-sand.PNG"
//   },
//   // sharpSand: {
//   //   sallersSupplyName: "Sharp Sand",
//   //   sallersSuppl_url: "../assets/Services/Sharp-Sand-2.jpg"
//   // },
//   roofingSheets: {
//     sallersSupplyName: "Roofing Sheets",
//     sallersSuppl_url: "../assets/Services/Roofing-Sheets.png"
//   },
//   wood: {
//     sallersSupplyName: "Wood",
//     sallersSuppl_url: "../assets/Services/Wood.png"
//   },
//   reinforcements: {
//     sallersSupplyName: "Reinforcements",
//     sallersSuppl_url: "../assets/Services/Reinforcements.jpg"
//   }
//
//   // chippingStones: {
//   //   sallersSupplyName: "Chipping Stones",
//   //   sallersSuppl_url: "../assets/Services/Chipping-Stones.jpg"
//   // },
//   // doors: {
//   //   sallersSupplyName: "Doors",
//   //   sallersSuppl_url: "../assets/Services/Doors.png"
//   // }
//   // ,
//   // chippingStonesRed: {
//   //   sallersSupplyName: "Chipping Stones Red",
//   //   sallersSuppl_url: "../assets/Services/Chipping-Stones-Red.jpg"
//   // }
// }

const handelMouseMove = () =>{
  // console.log("handelMouseMove");
  document.getElementById('hid-nav').style.display = "block"
  // return;
  document.getElementById('hid-nav-gal').style.display = "none"

}


const handelMouseOut = () =>{
  document.getElementById('hid-nav').style.display = "none"


}
const handelMouseMoveGal = () =>{
  // console.log("handelMouseMove");
  document.getElementById('hid-nav-gal').style.display = "block"
  document.getElementById('hid-nav').style.display = "none"

  // return;
}


const handelMouseOutGal = () =>{
  document.getElementById('hid-nav-gal').style.display = "none"

}

const handelMouseHover = () =>{
  document.getElementById('hid-nav').style.display = "none"

  document.getElementById('hid-nav-gal').style.display = "none"

}

const handelClickDisplayResponsiveMenue = () =>{
  // nav-span-con res-nav-cov-con
  document.getElementById('nav-span-con').style.display = "none"
  document.getElementById('res-nav-cov-con').style.display = "block"
  document.getElementById('nav-span-con-close').style.display = "flex"


}
const handelClickHiddeResponsiveMenue = () =>{
  // nav-span-con res-nav-cov-con
  document.getElementById('nav-span-con').style.display = "flex"
  document.getElementById('res-nav-cov-con').style.display = "none"
  document.getElementById('nav-span-con-close').style.display = "none"


}

const handelMouseMoveDisplayText = (idName, type, number) =>{

  if (type === 'equpment') {
    document.getElementById(idName).style.display = "block"

  }else if (type === 'gallary') {
    // section-gallary-img-hover-text-name
    if (number >= 0) {
      // console.log(number);
      document.getElementById(`section-gallary-img-hover-text-name-${number}`).style.display = "flex"

    } else {
      document.getElementById("section-gallary-img-hover-text-name").style.display = "flex"

    }

    document.getElementById(idName).style.display = "flex"

  }

}

const handelMouseMovehiddeText = (idName, type, number) =>{

  if (type === 'equpment') {
    document.getElementById(idName).style.display = "none"
  }else if (type === 'gallary') {
    // section-gallary-img-hover-text-name
    if (number >= 0) {
      // console.log(number);

      document.getElementById(`section-gallary-img-hover-text-name-${number}`).style.display = "none"

    } else {
      document.getElementById("section-gallary-img-hover-text-name").style.display = "none"
    }
    //

    document.getElementById(idName).style.display = "none"

  }

}

// ONE
const handleClickOpenBackgroung = (equType, type) =>{
  console.log(equType);
  if (type === 'equpment') {

    // <div class="display-equp-img">
    //   <div class="center-display-equp-img">
    //     <img src=${equpmentObjList[equType]['equipment_ulr']} alt="${equpmentObjList[equType]['equpment']} image" />
    //   </div>
    //   <h1>
    //     ${equpmentObjList[equType]['equpment']}
    //   </h1>
    //   <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
    //       <i class="fas fa-times" style="font-size: 48px; color: red;"></i>
    //
    //   </div>
    // </div>

    const target = equpmentObjList[equType]
    const setTarget = `


      <div class="background-section-screen-container">
        <div onclick="handleClickCloseBackgroung()" class="background-close">

        </div>
        <div class="display-equp-img-container">
          <div class="display-equp-img">
            <div class="center-display-equp-img">
              <img src=${equpmentObjList[equType]['image_url']} alt="${equpmentObjList[equType]['image_name']} image" />
            </div>
            <h1>
              ${equpmentObjList[equType]['image_name']}
            </h1>
            <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
                <i class="fas fa-times" style="font-size: 48px; color: red;"></i>

            </div>
          </div>
        </div>

      </div>
    `
    document.getElementById("back-sec-scr").innerHTML = setTarget

  }
  else if (type === 'equpment-main') {

    const target = equpmentObjList[equType]

    // <div class="display-equp-img">
    //   <div class="center-display-equp-img">
    //     <img src='../${equpmentObjList[equType]['equipment_ulr']}' alt="${equpmentObjList[equType]['equpment']} image" />
    //   </div>
    //   <h1>
    //     ${equpmentObjList[equType]['equpment']}
    //   </h1>
    //   <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
    //       <i class="fas fa-times" style="font-size: 48px; color: red;"></i>
    //
    //   </div>
    // </div>

    const setTarget = `


      <div class="background-section-screen-container">
        <div onclick="handleClickCloseBackgroung()"  class="background-close">

        </div>
        <div class="display-equp-img-container">
          <div class="display-equp-img">
            <div class="center-display-equp-img">
              <img src='${equpmentObjList[equType]['image_url']}' alt="${equpmentObjList[equType]['image_name']} image" />
            </div>
            <h1>
              ${equpmentObjList[equType]['image_name']}
            </h1>
            <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
                <i class="fas fa-times" style="font-size: 48px; color: red;"></i>

            </div>
          </div>
        </div>

      </div>
    `
    document.getElementById("back-sec-scr").innerHTML = setTarget

  }
  else if(type === 'gallary') {

    const target = gallaryImage[equType]
    // <div class="display-equp-img">
    //   <div class="center-display-equp-img">
    //     <img src=${gallaryImage[equType]['eventName_url']} alt="${gallaryImage[equType]['eventName']} image" />
    //   </div>
    //   <h1>
    //     ${gallaryImage[equType]['eventName']}
    //   </h1>
    //   <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
    //       <i class="fas fa-times" style="font-size: 48px; color: red;"></i>
    //
    //   </div>
    // </div>

    const setTarget = `



      <div class="background-section-screen-container">
        <div onclick="handleClickCloseBackgroung()"  class="background-close">

        </div>
        <div class="display-equp-img-container">
          <div class="display-equp-img">
            <div class="center-display-equp-img">
              <img src=${gallaryImage[equType]['image_url']} alt="${gallaryImage[equType]['image_name']} image" />
            </div>
            <h1>
              ${gallaryImage[equType]['image_name']}
            </h1>
            <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
                <i class="fas fa-times" style="font-size: 48px; color: red;"></i>

            </div>
          </div>
        </div>

      </div>
    `
    document.getElementById("back-sec-scr").innerHTML = setTarget

  }else if (type === 'gallary-main') {
    const target = gallaryImage[equType]
    // <div class="display-equp-img">
    //   <div class="center-display-equp-img">
    //     <img src='../${gallaryImage[equType]['eventName_url']}' alt="${gallaryImage[equType]['eventName']} image" />
    //   </div>
    //   <h1>
    //     ${gallaryImage[equType]['eventName']}
    //   </h1>
    //   <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
    //       <i class="fas fa-times" style="font-size: 48px; color: red;"></i>
    //
    //   </div>
    // </div>
    const setTarget = `


      <div class="background-section-screen-container">
        <div onclick="handleClickCloseBackgroung()"  class="background-close">

        </div>
        <div class="display-equp-img-container">
          <div class="display-equp-img">
            <div class="center-display-equp-img">
              <img src='${gallaryImage[equType]['image_url']}' alt="${gallaryImage[equType]['image_name']} image" />
            </div>
            <h1>
              ${gallaryImage[equType]['image_name']}
            </h1>
            <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
                <i class="fas fa-times" style="font-size: 48px; color: red;"></i>

            </div>
          </div>
        </div>

      </div>
    `
    document.getElementById("back-sec-scr").innerHTML = setTarget

  }
  else if (type === "concreate") {
    const target = concreateImages[equType]
    // <div class="display-equp-img">
    //   <div class="center-display-equp-img">
    //     <img src='${concreateImages[equType]['concreate_url']}' alt="${concreateImages[equType]['concreatName']} image" />
    //   </div>
    //   <h1>
    //     ${concreateImages[equType]['concreatName']}
    //   </h1>
    //   <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
    //       <i class="fas fa-times" style="font-size: 48px; color: red;"></i>
    //
    //   </div>
    // </div>
    const setTarget = `




      <div class="background-section-screen-container">
        <div onclick="handleClickCloseBackgroung()"  class="background-close">

        </div>
        <div class="display-equp-img-container">
          <div class="display-equp-img">
            <div class="center-display-equp-img">
              <img src='${concreateImages[equType]['image_url']}' alt="${concreateImages[equType]['image_name']} image" />
            </div>
            <h1>
              ${concreateImages[equType]['image_name']}
            </h1>
            <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
                <i class="fas fa-times" style="font-size: 48px; color: red;"></i>

            </div>
          </div>
        </div>

      </div>
    `
    // concreatName
    // concreate_url
    document.getElementById("back-sec-scr").innerHTML = setTarget
  }else if(type === 'sallersSupply'){
    const target = sallersSupplyImg[equType]
    // <div class="display-equp-img">
    //   <div class="center-display-equp-img">
    //     <img src='${sallersSupplyImg[equType]['sallersSuppl_url']}' alt="${sallersSupplyImg[equType]['sallersSupplyName']} image" />
    //   </div>
    //   <h1>
    //     ${sallersSupplyImg[equType]['sallersSupplyName']}
    //   </h1>
    //   <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
    //       <i class="fas fa-times" style="font-size: 48px; color: red;"></i>
    //
    //   </div>
    // </div>
    const setTarget = `



      <div class="background-section-screen-container">
        <div onclick="handleClickCloseBackgroung()"  class="background-close">

        </div>
        <div class="display-equp-img-container">
          <div class="display-equp-img">
            <div class="center-display-equp-img">
              <img src='${sallersSupplyImg[equType]['image_url']}' alt="${sallersSupplyImg[equType]['image_name']} image" />
            </div>
            <h1>
              ${sallersSupplyImg[equType]['image_name']}
            </h1>
            <div onclick="handleClickCloseBackgroung()" class="display-equp-img-close">
                <i class="fas fa-times" style="font-size: 48px; color: red;"></i>

            </div>
          </div>
        </div>

      </div>
    `
    // sallersSupplyName
    // sallersSuppl_url
    document.getElementById("back-sec-scr").innerHTML = setTarget

  }
  document.getElementById('back-sec-scr').style.display = "flex"

}
const handleClickCloseBackgroung = () =>{
  document.getElementById('back-sec-scr').style.display = "none"

}

// TWO
const displayEquipments = (type) =>{

  if (type === "home") {
    const getObjectKeys = Object.keys(equpmentObjList)
    let getAllEqupmentDisplay = ""
    getObjectKeys.map((val, idx) =>{
      getAllEqupmentDisplay += `
        <div
          class="section-equipment"
          onclick="handleClickOpenBackgroung('${val}', 'equpment')"
        >
          <div class="section-equipment-img">
            <img src="${equpmentObjList[val]["image_url"]}" alt="${equpmentObjList[val]["image_name"]} image" />
            <div
                class="section-equipment-img-hover"
                onmousemove="handelMouseMoveDisplayText('section-equipment-img-hover-text-${idx}', 'equpment', ${idx})"
                onmouseout="handelMouseMovehiddeText('section-equipment-img-hover-text-${idx}', 'equpment', ${idx})"
            >
                <h3 id="section-equipment-img-hover-text-${idx}" class="sec-eup-img-hov-txt">
                  Show Image
                </h3>
            </div>
          </div>
          <div class="section-equipment-info">
            <h1>
              ${equpmentObjList[val]["image_name"]}
            </h1>
          </div>
        </div>
      `

    })
    // console.log(getAllEqupmentDisplay)
    document.getElementById("sect-rent-equip-con").innerHTML = getAllEqupmentDisplay
  } else {
    const getObjectKeys = Object.keys(equpmentObjList)
    let getAllEqupmentDisplay = ""
    getObjectKeys.map((val, idx) =>{
      getAllEqupmentDisplay += `
        <div
          class="section-equipment section-equipment-main"
          onclick="handleClickOpenBackgroung('${val}', 'equpment-main')"
        >
          <div class="section-equipment-img">
            <img src=${equpmentObjList[val]["image_url"]} alt="${equpmentObjList[val]["image_name"]} image" />
            <div
                class="section-equipment-img-hover"
                onmousemove="handelMouseMoveDisplayText('section-equipment-img-hover-text-${idx}', 'equpment', ${idx})"
                onmouseout="handelMouseMovehiddeText('section-equipment-img-hover-text-${idx}', 'equpment', ${idx})"
            >
                <h3 id="section-equipment-img-hover-text-${idx}" class="sec-eup-img-hov-txt">
                  Show Image
                </h3>
            </div>
          </div>
          <div class="section-equipment-info">
            <h1>
              ${equpmentObjList[val]["image_name"]}
            </h1>
          </div>
        </div>
      `

    })
    // console.log(getAllEqupmentDisplay)
    document.getElementById("sect-rent-equip-con").innerHTML = getAllEqupmentDisplay
  }


}

// THREE
const displayConcreate = () =>{
  const getObjectKeys = Object.keys(concreateImages)
  let getAllEqupmentDisplay = ""
  getObjectKeys.map((val, idx) =>{
    getAllEqupmentDisplay += `
      <div
        class="section-equipment section-equipment-concreate"
        onclick="handleClickOpenBackgroung('${val}', 'concreate')"
      >
        <div class="section-equipment-img">
          <img src="${concreateImages[val]["image_url"]}" alt="${concreateImages[val]["image_name"]} image" />
          <div
              class="section-equipment-img-hover"
              onmousemove="handelMouseMoveDisplayText('section-equipment-img-hover-text-${idx}', 'equpment', ${idx})"
              onmouseout="handelMouseMovehiddeText('section-equipment-img-hover-text-${idx}', 'equpment', ${idx})"
          >
              <h3 id="section-equipment-img-hover-text-${idx}" class="sec-eup-img-hov-txt">
                Show Image
              </h3>
          </div>
        </div>
        <div class="section-equipment-info">
          <h1>
            ${concreateImages[val]["image_name"]}
          </h1>
        </div>
      </div>
    `

  })
  // console.log(getAllEqupmentDisplay)
  // concreatName
  // concreate_url
  document.getElementById("sect-rent-equip-con").innerHTML = getAllEqupmentDisplay
}

// FOUR
const displaySalessupply = () =>{
  const getObjectKeys = Object.keys(sallersSupplyImg)
  let getAllEqupmentDisplay = ""
  getObjectKeys.map((val, idx) =>{
    getAllEqupmentDisplay += `
      <div
        class="section-equipment section-equipment-concreate"
        onclick="handleClickOpenBackgroung('${val}', 'sallersSupply')"
      >
        <div class="section-equipment-img">
          <img src="${sallersSupplyImg[val]["image_url"]}" alt="${sallersSupplyImg[val]["image_name"]} image" />
          <div
              class="section-equipment-img-hover"
              onmousemove="handelMouseMoveDisplayText('section-equipment-img-hover-text-${idx}', 'equpment', ${idx})"
              onmouseout="handelMouseMovehiddeText('section-equipment-img-hover-text-${idx}', 'equpment', ${idx})"
          >
              <h3 id="section-equipment-img-hover-text-${idx}" class="sec-eup-img-hov-txt">
                Show Image
              </h3>
          </div>
        </div>
        <div class="section-equipment-info">
          <h1>
            ${sallersSupplyImg[val]["image_name"]}
          </h1>
        </div>
      </div>
    `
    // sallersSupplyName
    // sallersSuppl_url
  })
  // console.log(getAllEqupmentDisplay)
  // concreatName
  // concreate_url
  document.getElementById("sect-rent-equip-con").innerHTML = getAllEqupmentDisplay
}

// FIVE
const displayGallary = (numbers, type)=>{

  if (type === "home") {
    const getObjectKeys = Object.keys(gallaryImage).slice(0, numbers)

    let getAllEqupmentDisplay = ""
    getObjectKeys.map((val, idx) =>{
      console.log(val, idx)
      getAllEqupmentDisplay += `
      <div
        class="section-gallary-img"
        onclick="handleClickOpenBackgroung('${val}', 'gallary')"
      >
        <img src=${gallaryImage[val]['image_url']} alt="${gallaryImage[val]['image_name']} image" />
        <div
            class="section-gallary-img-hover"
            onmousemove="handelMouseMoveDisplayText('section-gallary-img-hover-text-${idx}', 'gallary', ${idx})"
            onmouseout="handelMouseMovehiddeText('section-gallary-img-hover-text-${idx}', 'gallary', ${idx})"

        >
          <div class="section-gallary-img-hover-container">
            <h3 id="section-gallary-img-hover-text-${idx}" class="sec-gall-img-hov-txt">
              <b>
                i
              </b>
            </h3>
            <h4 id="section-gallary-img-hover-text-name-${idx}" class="sec-gall-img-hov-txt-name">
              ${gallaryImage[val]['image_name']}
            </h4>
          </div>

        </div>
      </div>
      `

    })
    // console.log(getAllEqupmentDisplay)
    document.getElementById("sect-gall-img").innerHTML = getAllEqupmentDisplay
  }else {
    let getObjectKeys = Object.keys(gallaryImage)//.slice(0, numbers)
    getObjectKeys = getObjectKeys.filter(val=>val !== "Before")
    getObjectKeys = getObjectKeys.filter(val=>val !== "After")
// .section-gallary-main
    // console.log(Object.keys(gallaryImage), getObjectKeys)
    let getAllEqupmentDisplay = ""
    getObjectKeys.map((val, idx) =>{
      console.log(val, idx)
      console.log(`../${gallaryImage[val]['eventName_url']}`)
      getAllEqupmentDisplay += `
      <div
        class="section-gallary-img section-gallary-img-main"
        onclick="handleClickOpenBackgroung('${val}', 'gallary-main')"
      >
        <img src=${gallaryImage[val]['image_url']} alt="${gallaryImage[val]['image_name']} image" />
        <div
            class="section-gallary-img-hover"
            onmousemove="handelMouseMoveDisplayText('section-gallary-img-hover-text-${idx}', 'gallary', ${idx})"
            onmouseout="handelMouseMovehiddeText('section-gallary-img-hover-text-${idx}', 'gallary', ${idx})"

        >
          <div class="section-gallary-img-hover-container">
            <h3 id="section-gallary-img-hover-text-${idx}" class="sec-gall-img-hov-txt">
              <b>
                i
              </b>
            </h3>
            <h4 id="section-gallary-img-hover-text-name-${idx}" class="sec-gall-img-hov-txt-name">
              ${gallaryImage[val]['image_name']}
            </h4>
          </div>

        </div>
      </div>
      `

    })
    // console.log(getAllEqupmentDisplay)
    document.getElementById("sect-gall-img").innerHTML = getAllEqupmentDisplay
  }

}



const onHandelOnClick = () =>{
  window.location.replace("./about-us.html")
}
