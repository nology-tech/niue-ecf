import ContentHeader from "./ContentHeader";
import { render, screen } from "@testing-library/react";
import { customRender } from "../../test-utilities/test-utilities";
import userEvent from "@testing-library/user-event";
import SearchContainer from "../../containers/SearchContainer/SearchContainer";
import { Route, Routes } from 'react-router-dom';
import PathwaysCard from "../PathwaysCard/PathwaysCard";
import dummyPathwayData from "../../assets/data/dummyPathwayData";

describe("initial tests for content header", () => {
    
    it("should render a heading and a link on the page", () => {
        customRender(<ContentHeader title="Test Title" link="/" />);
        const title = screen.getByText("Test Title");
        const link = screen.getAllByText("View All");
        expect(title).toBeInTheDocument();
        expect(link[0]).toBeTruthy();
    });

    it("should render a heading passed through the title prop", () => {
        customRender(<ContentHeader title="Test Title" link="/" />);
        const title = screen.getByText("Test Title");
        expect(title).toBeInTheDocument();
    });

    it("should change the displayed page when 'View All' is clicked", () => {
        //This test loads a single card when the View All link is clicked because the component to display all results has not been completed, this can be updated once the component has been made.
        const toRender = (<Routes>
        <Route path="/" element={<SearchContainer pathwaysLink="/test" />} />
        <Route path="/test" element={<PathwaysCard card={dummyPathwayData} />} />
        </Routes>);

        customRender(toRender);
        const viewAll = screen.getAllByText("View All");
        userEvent.click(viewAll[0]);
        const card = screen.getByTestId("pathwaycard");
        expect(card).toBeInTheDocument();
       
    });
});