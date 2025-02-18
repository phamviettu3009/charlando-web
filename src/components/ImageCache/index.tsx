import { Fragment, useEffect, useState } from "react";
import ResourceServiceImpl from "services/resource";
import "./image-cache.scss";

const ImageCaches: { [key: string]: string } = {};

export type ImageCachePropsType = {
    resourceID?: string | null;
    renderImage: (src: string | null) => React.ReactNode;
};

function ImageCache({ resourceID, renderImage }: ImageCachePropsType) {
    const [img, setImg] = useState<string | null>(null);

    useEffect(() => {
        if (resourceID === undefined || resourceID === null) return;

        if (ImageCaches[resourceID]) {
            setImg(ImageCaches[resourceID]);
        } else {
            fetchImage(resourceID);
        }
    }, [resourceID]);

    const fetchImage = async (resourceID: string) => {
        const img: string = await ResourceServiceImpl.getImage(resourceID);
        ImageCaches[resourceID] = img;
        setImg(img);
    };

    return <Fragment>{renderImage(img)}</Fragment>;
}

export default ImageCache;
