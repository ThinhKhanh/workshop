import SlideShow from "../models/slideShow.model";

export const getAllSlideshow = async (req, res) => {
    try {
        const slides = await SlideShow.find();
        res.status(201).json(slides);
    } catch (error) {
        res.status(500).json({ message: "Error slides", error });   
    }
}

export const createSlideshow = async (req, res) => {
    try {
        const slides = await SlideShow.create(req.body);
        res.status(201).json(slides);
    } catch (error) {
        res.status(500).json({ message: "Error slide", error });
    }
}

export const deleteSlideshow = async (req, res) => {
    try {
        const slides = await SlideShow.findByIdAndDelete(req.params.id);
        if (!slides) return res.status(404).json({ message: "không tìm thấy banner"});
        res.status(200).json({ message: "Xoá thành công" });
    } catch (error) {
         res.status(500).json({ message: "Error slide", error });
    }
}