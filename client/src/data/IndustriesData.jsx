import airport from "../assets/industries/airport2.webp";
import dataCenter from "../assets/industries/dataCentre.webp";
import hydro from "../assets/industries/hydro.webp";
import metro from "../assets/industries/metro2.webp";
import powerTransmission from "../assets/industries/powerTransmission.webp";
import steel2 from "../assets/industries/steel2.webp";
import solar from "../assets/industries/solar.webp";
import tunnel from "../assets/industries/tunnel.webp";
import wind from "../assets/industries/wind.webp";

const IndustriesData = [
  {
    image: solar,
    title: "Solar Power",
    description:
      "Empowering industries with sustainable solar energy solutions for a greener future.",
    clients: [
      { client: "Sukhbir Agro Energy" },
      { client: "Amplus Solar" },
      { client: "Hero Future Energies" },
      { client: "Sunsource Energy" },
      { client: "Adani Renewable" },
      { client: "Renew Power" },
      { client: "Amp Energy" },
      { client: "Clean Solar" },
      { client: "Jakson Green" },
      { client: "Tata Power Solar" },
      { client: "JSW Energy" },
      { client: "Mahindra Susten" },
      { client: "Adani Green Energies" },
      { client: "Juniper Green Energy" },
      { client: "ACME Solar" }
    ]
  },
  {
    image: hydro,
    title: "Hydro Power",
    description:
      "Innovative hydroelectric solutions harnessing the power of water for efficient energy production.",
    clients: [
      { client: "Flovel Energy" },
      { client: "GE Renewable" },
      { client: "AD Hydro" },
      { client: "Andritz" },
      { client: "B Fouress Hydro" },
      { client: "Geppert Hydro" }
    ]
  },
  {
    image: wind,
    title: "Wind Energy",
    description:
      "Cutting-edge wind energy systems designed to capture natural wind power for a sustainable tomorrow.",
    clients: [
      { client: "Inox Wind" },
      { client: "Sembcorp Green Infra" },
      { client: "Greenko" },
      { client: "Gamesa" },
      { client: "Suzlon" },
      { client: "Hero Future Energies" },
      { client: "JSW Neo Energy" }
    ]
  },
  {
    image: dataCenter,
    title: "Data Centers",
    description:
      "State-of-the-art data center solutions ensuring optimal performance, security, and scalability for your IT infrastructure.",
    clients: [
      { client: "STT Global Data Centers" },
      { client: "NTT Communications" },
      { client: "Sify Technologies" },
      { client: "Nxtra Data Limited" },
      { client: "Tata Communications Ltd" }
    ]
  },
  {
    image: tunnel,
    title: "Tunnel",
    description:
      "Advanced tunneling solutions for infrastructure projects, ensuring safety and efficiency in underground construction.",
    clients: [
      { client: "Tata Projects" },
      { client: "Ashoka Buildcon" },
      { client: "Savronik" },
      { client: "Patel Engineering" }
    ]
  },
  {
    image: airport,
    title: "Airport",
    description:
      "Comprehensive airport infrastructure solutions enhancing operational efficiency and passenger experience.",
    clients: [
      { client: "NKG Infrastructure" },
      { client: "L&T" },
      { client: "Vardhman Airports" },
      { client: "Siemens" },
      { client: "GMR" },
      { client: "Tata Project" }
    ]
  },
  {
    image: powerTransmission,
    title: "Power Transmission Distribution & Substation",
    description:
      "Reliable power transmission, distribution, and substation solutions ensuring efficient energy delivery and grid stability.",
    clients: [
      { client: "GE T & D" },
      { client: "Kalpataru Power Transmission" },
      { client: "Angelique International" },
      { client: "Mohan Energy" },
      { client: "KEC International" }
    ]
  },
  {
    image: steel2,
    title: "Steel Industry",
    description:
      "Robust steel industry solutions tailored for modern manufacturing and construction needs.",
    clients: [
      { client: "Jindal Steel & Power" },
      { client: "Tata Steel" },
      { client: "JSW" },
      { client: "Jindal Stainless" },
      { client: "Durgapur Steel Plant" },
      { client: "ISGEC" }
    ]
  },
  {
    image: metro,
    title: "Metro Railways & Highways",
    description:
      "Efficient metro railway and highway solutions designed to improve urban mobility and transportation infrastructure.",
    clients: [
      { client: "L&T Construction" },
      { client: "Tata Projects" },
      { client: "Bluestar" },
      { client: "ETA Engineering" },
      { client: "KEC International" },
      { client: "Kalpataru Power" },
      { client: "GR Infra" },
      { client: "SAM India" }
    ]
  },
];

export default IndustriesData;