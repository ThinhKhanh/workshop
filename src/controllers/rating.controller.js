import Rating from "../models/rating.model.js"; 

export const getAllRatings = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;

        const options = {
            page: Number(page),
            limit: Number(limit),
            populate: ["customer_id", "product_id"],
            sort: { createdAt: -1 }
        };

        const ratings = await Rating.paginate({}, options);
        res.status(200).json(ratings);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server khi lấy đánh giá", error });
    }
};

export const getRatingById = async (req, res) => {
    try {
        const rating = await Rating.findById(req.params.id).populate("customer_id product_id");
        if (!rating) {
            return res.status(404).json({ message: "Không tìm thấy đánh giá" });
        }
        res.status(200).json(rating);
    } catch (error) {
        res.status(500).json({ message: "Lỗi server", error });
    }
};

export const createRating = async (req, res) => {
    try {
        const newRating = await Rating.create(req.body);
        res.status(201).json(newRating);
    } catch (error) {
        res.status(400).json({ message: "Lỗi khi tạo đánh giá", error });
    }
};

export const updateRating = async (req, res) => {
    try {
        const updatedRating = await Rating.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedRating) {
            return res.status(404).json({ message: "Không tìm thấy đánh giá để cập nhật" });
        }
        res.status(200).json(updatedRating);
    } catch (error) {
        res.status(400).json({ message: "Lỗi khi cập nhật đánh giá", error });
    }
};

export const deleteRating = async (req, res) => {
    try {
        const deletedRating = await Rating.findByIdAndDelete(req.params.id);
        if (!deletedRating) {
            return res.status(404).json({ message: "Không tìm thấy đánh giá để xoá" });
        }
        res.status(200).json({ message: "Đã xoá đánh giá thành công", id: deletedRating._id });
    } catch (error) {
        res.status(500).json({ message: "Lỗi khi xoá đánh giá", error });
    }
};
