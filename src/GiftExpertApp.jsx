import { useState } from "react"
import { AddCategory, GiftGrid } from "./components";

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        if (!categories.findIndex(c => c.toLowerCase() == newCategory.toLowerCase())) return;
        setCategories(categories => [newCategory, ...categories]);
    }

    return (
        <>
            <h1>GiftExperApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />
            {
                categories.map(c => (
                    <GiftGrid
                        key={c}
                        category={c} />
                ))
            }
        </>
    )
}