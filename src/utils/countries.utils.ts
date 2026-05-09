import countries from 'world-countries';

export const countryList = countries
  .filter((country) => country.idd.root)
  .map((country) => ({
    code: country.cca2,

    name: country.name.common,

    flag: country.flag,

    callingCode: country.idd.root + (country.idd.suffixes?.[0] || ''),
  }));

export const defaultCountry =
  countryList.find((country) => country.code === 'ES') ?? countryList[0];
