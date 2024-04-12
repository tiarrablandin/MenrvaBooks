import AdvancedSearchBar from './advancedSearchBar';
import AdvancedSearchMenu from './advancedSearchMenu';
import SuggestionCards from './suggestionCards';

const AdvancedSearchComponent = () => {
    return (
        <div className="advanced-search-container flex flex-col items-start w-1/2">
            <AdvancedSearchBar />
            <SuggestionCards />
            <div className="menu-container w-3/4 flex justify-end mt-2 ml-2">
                <AdvancedSearchMenu />
            </div>
        </div>
    );
};

export default AdvancedSearchComponent;
