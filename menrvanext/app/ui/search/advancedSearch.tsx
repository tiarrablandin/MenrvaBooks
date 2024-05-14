import AdvancedSearchBar from './advancedSearchBar';
import SuggestionCards from './suggestionCards';

const AdvancedSearchComponent = () => {
    return (
        <div className="flex flex-col w-4/5">
            <AdvancedSearchBar />
            <SuggestionCards />
        </div>
    );
};

export default AdvancedSearchComponent;
