import React, {useState} from 'react';
import ArticleCardList from '../ArticleCardList/ArticleCardList';
import TrophyHeader from "../../components/TrophyHeader/TrophyHeader";
import SearchBar from '../../components/SearchBar/SearchBar';
import FilterTag from '../../components/FilterTag/FilterTag';
import Navigation from '../../components/Navigation/Navigation';
import "./Articles.scss";

// path: /articles

const Articles = ({ articleInfo, userProfile }) => {
  
  // eslint-disable-next-line no-unused-vars
  const [searchCriteria, setSearchCriteria] = useState("");

  return (
    <div className='articles'>
      <TrophyHeader userProfile={userProfile} />
      <h1 className='articles__title'>Articles</h1>
      <div className="articles__content">
        <SearchBar handleChange={setSearchCriteria} />
        <FilterTag />
        <ArticleCardList articleInfo={articleInfo} />
        <Navigation />
      </div>
    </div>
  );
};

export default Articles;