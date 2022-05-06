import React from "react";
import { screen, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import PostDetail from "./PostDeatail";
import { posts } from "../../utils/posts/posts";
import HomeFirst from "../../assets/gym/homeBack.jpg";

describe("Post Detail", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PostDetail />
      </Provider>
    );
  });

  it("single post contains", () => {
    expect(posts[0]).toEqual(
      expect.objectContaining({
        img: HomeFirst,
        type: "EXERCISE",
        featured: false,
        header: "3 POST-WORKOUT MISTAKES AND HOW TO FIX THEM",
        secondaryHeader:
          "Explicabo ut ut molestiae beatae consequatur mollitia. Aut iusto reprehenderit. Aliquid id voluptas quia reprehenderit exercitationem neque. Non veritatis explicabo est beatae adipisci quo quaerat.Voluptatum amet aspernatur. Quia cumque amet. Sequi hic voluptates fuga dolores.",
        info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elit purus, tristique vitae dui ac, consectetur dictum felis. Cras tempor dolor ipsum, vitae aliquam tortor cursus sed. Vivamus porta justo et diam egestas interdum. In id erat ultrices, interdum tortor at, dignissim elit. Morbi et arcu auctor quam tincidunt tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed lobortis ullamcorper dolor, posuere fermentum eros sagittis sed Suspendisse at congue nibh, et imperdiet tortor. Nam placerat semper blandit. Proin pellentesque molestie fringilla. Suspendisse eu ex non sem porttitor pulvinar. Sed molestie massa ac convallis volutpat. Donec sit amet congue mi. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce non convallis odio. Quisque sapien tortor, tincidunt in magna a, euismod maximus lorem. In faucibus, arcu nec dictum mattis, sem ex tempus velit, et cursus mi ipsum non lorem. Curabitur egestas libero in molestie malesuada.",
        date: "01/2020",
        bgColor: "first",
      })
    );
  });
});
