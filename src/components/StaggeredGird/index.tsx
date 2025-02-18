import { useEffect, useState } from "react";
import "./staggered-grid.scss";

type ColumnType = {
    xl: number;
    lg?: number;
    md?: number;
    sm?: number;
    es?: number;
};

type StaggeredGirdPropsType<T> = {
    columns: ColumnType;
    data: T[];
    renderItem: (item: T) => React.ReactNode;
};

function setUpList<T>(list: T[], columns: number): T[][] {
    const gridArray: T[][] = Array.from({ length: columns }, () => []);
    let currentIndex: number = 0;

    for (const object of list) {
        gridArray[currentIndex].push(object);
        currentIndex = (currentIndex + 1) % columns;
    }

    return gridArray;
}

function StaggeredGird<T>({ columns, data, renderItem }: StaggeredGirdPropsType<T>) {
    const [gridList, setGridList] = useState<T[][]>([]);

    useEffect(() => {
        const handleResize = () => {
            const width: number = window.innerWidth;
            switch (true) {
                case width >= 1200:
                    setGridList(setUpList(data, columns.xl));
                    break;
                case width >= 992 && columns.lg !== undefined:
                    setGridList(setUpList(data, columns.lg));
                    break;
                case width >= 768 && columns.md !== undefined:
                    setGridList(setUpList(data, columns.md));
                    break;
                case width >= 576 && columns.sm !== undefined:
                    setGridList(setUpList(data, columns.sm));
                    break;
                case width < 576 && columns.es !== undefined:
                    setGridList(setUpList(data, columns.es));
                    break;
                default:
                    break;
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [data]);

    return (
        <div className="staggered-grid">
            {gridList.map((col, colIndex) => (
                <div className="staggered-grid__column" key={colIndex}>
                    {col.map((item, itemIndex) => (
                        <div key={itemIndex}>{renderItem(item)}</div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default StaggeredGird;
