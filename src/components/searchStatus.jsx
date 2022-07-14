import React from "react";

const SearchStatus = (count) => {

        const renderPhrase = () => {
                const lastIndex = Number(count.toString().slice(-1))
                if (count.count > 4 && count.count < 15) return "человек тусанет"
                if ([2, 3, 4].indexOf(lastIndex) >= 0) return "человека тусанут"
                if (lastIndex === 1) return "человек тусанет"
                return "человек тусанет"
                }
    
        return <h2>
            <span
            className={'badge ' + (count.count > 0 ? 'bg-primary' : 'bg-danger')}
            >
                {count.count > 0
                ? `${count.count + " " + renderPhrase(count.count)} с тобой сегодня`
                : "Никто с тобой не тусанет"}
            </span>
        </h2>
            
}

export default SearchStatus