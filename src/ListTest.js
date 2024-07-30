import React from "react";

import List from "./List";
import { render } from "@testing-library/react";


test ('renders list with  intial items' , () => {
    render(<List/>);
    const itemList = screen.getAllByValue('listitem');
    expect(itemList).to

})