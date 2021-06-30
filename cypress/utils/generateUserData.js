import faker from "faker";
import { randomNumber } from "./randomNumber";

export const generateUserData = () => {
  const unixTime = Math.floor(Date.now() / 1000);
  const userInfo = {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: `${unixTime}@test.com`,
    password: "Tester@1234",
    dobDay: randomNumber(1, 28).toString(),
    dobMonth: randomNumber(1, 12).toString(),
    dobYear: randomNumber(1970, 2003).toString(),
    addressOne: faker.address.streetAddress(),
    city: faker.address.city(),
    state: faker.address.state(),
    postcode: "00000",
    phone: faker.phone.phoneNumber('###-###-####'),
  };

  return userInfo;
};
