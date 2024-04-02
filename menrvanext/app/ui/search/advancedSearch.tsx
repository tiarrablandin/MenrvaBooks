import AdvancedSearchBar from './advancedSearchBar';
import AdvancedSearchMenu from './advancedSearchMenu';

const AdvancedSearchComponent = () => {
    return (
        <div className="advanced-search-container flex flex-col items-end w-1/2">
            <AdvancedSearchBar />
            <div className="menu-container w-3/4 flex justify-center mt-2 ">
                <AdvancedSearchMenu />
            </div>
        </div>
    );
};

export default AdvancedSearchComponent;
