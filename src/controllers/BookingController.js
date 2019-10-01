const Booking = require("../models/Booking");

module.exports = {
  async store(req, res) {
    const { user_id } = req.headers;
    const { spot_id } = req.params;
    const { date } = req.body;

    const bookings = await Booking.find({ user: user_id, spot: spot_id });

    if (bookings) {
      return res
        .status(400)
        .json({ message: "User already have booking on this spot!" });
    }

    const booking = await Booking.create({
      user: user_id,
      spot: spot_id,
      date
    });

    await booking
      .populate("spot")
      .populate("user")
      .execPopulate();

    return res.json(booking);
  }
};
