// script.js
const timeZones = [
    { country: "Baker Island, Howland Island", timeZone: "Etc/GMT+12" },
    { country: "Niue, American Samoa", timeZone: "Etc/GMT+11" },
    { country: "Hawaii, Tahiti", timeZone: "Etc/GMT+10" },
    { country: "Alaska, Gambier Islands", timeZone: "Etc/GMT+9" },
    { country: "Pacific Time (US & Canada), Baja California", timeZone: "America/Los_Angeles" },
    { country: "Mountain Time (US & Canada), Chihuahua", timeZone: "America/Denver" },
    { country: "Central Time (US & Canada), Mexico City", timeZone: "America/Chicago" },
    { country: "Eastern Time (US & Canada), Bogotá", timeZone: "America/New_York" },
    { country: "Atlantic Time (Canada), Caracas", timeZone: "America/Halifax" },
    { country: "Newfoundland Time (Canada)", timeZone: "America/St_Johns" },
    { country: "Brasilia Time, Buenos Aires", timeZone: "America/Sao_Paulo" },
    { country: "Fernando de Noronha, South Georgia", timeZone: "Etc/GMT+2" },
    { country: "Azores Time, Cape Verde Time", timeZone: "Atlantic/Azores" },
    { country: "Greenwich Mean Time, Reykjavik", timeZone: "Etc/GMT" },
    { country: "Central European Time, Lagos", timeZone: "Europe/Berlin" },
    { country: "Eastern European Time, Cairo", timeZone: "Europe/Istanbul" },
    { country: "Moscow Standard Time, Nairobi", timeZone: "Europe/Moscow" },
    { country: "Iran Standard Time", timeZone: "Asia/Tehran" },
    { country: "Gulf Standard Time, Dubai", timeZone: "Asia/Dubai" },
    { country: "Afghanistan Time", timeZone: "Asia/Kabul" },
    { country: "Pakistan Standard Time, Maldives", timeZone: "Asia/Karachi" },
    { country: "Indian Standard Time, Colombo", timeZone: "Asia/Kolkata" },
    { country: "Nepal Time", timeZone: "Asia/Kathmandu" },
    { country: "Bangladesh Time, Almaty", timeZone: "Asia/Dhaka" },
    { country: "Cocos Islands Time", timeZone: "Indian/Cocos" },
    { country: "Indochina Time, Jakarta", timeZone: "Asia/Bangkok" },
    { country: "China Standard Time, Hong Kong", timeZone: "Asia/Shanghai" },
    { country: "Southeastern Western Australia", timeZone: "Australia/Eucla" },
    { country: "Japan Standard Time, Seoul", timeZone: "Asia/Tokyo" },
    { country: "Australian Central Standard Time, Darwin", timeZone: "Australia/Darwin" },
    { country: "Australian Eastern Standard Time, Sydney", timeZone: "Australia/Sydney" },
    { country: "Lord Howe Standard Time", timeZone: "Australia/Lord_Howe" },
    { country: "Solomon Islands Time, Magadan", timeZone: "Pacific/Guadalcanal" },
    { country: "Norfolk Island Time", timeZone: "Pacific/Norfolk" },
    { country: "New Zealand Standard Time, Fiji", timeZone: "Pacific/Auckland" },
    { country: "Chatham Islands Time", timeZone: "Pacific/Chatham" },
    { country: "Tonga Time, Apia", timeZone: "Pacific/Tongatapu" },
    { country: "Line Islands Time", timeZone: "Etc/GMT-14" }
  ];

  
  const displayTimeZones = () => {
    const timeZoneContainer = document.getElementById("timeZones");
    timeZones.forEach((item) => {
      const { country, timeZone } = item;
      const timeZoneCard = document.createElement("div");
      timeZoneCard.classList.add("timeZoneCard");
  
      const countryName = document.createElement("div");
      countryName.classList.add("countryName");
      countryName.textContent = country;
  
      const timeElement = document.createElement("div");
      timeElement.classList.add("time");
  
      timeZoneCard.appendChild(countryName);
      timeZoneCard.appendChild(timeElement);
      timeZoneContainer.appendChild(timeZoneCard);
  
      updateTime(timeZone, timeElement);
      setInterval(() => updateTime(timeZone, timeElement), 1000);
    });
  };
  
  const updateTime = (timeZone, timeElement) => {
    const options = { timeZone, timeStyle: "medium", hour12: false };
    const timeString = new Date().toLocaleTimeString([], options);
    timeElement.textContent = timeString;
  };
  
  displayTimeZones();
  //  CODE CREATER BY WARDIER 