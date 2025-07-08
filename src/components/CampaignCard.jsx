import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import DonationForm from "@/components/DonationForm";
import { calculateDaysLeft } from "@/utils/daysLeft";
import truncate from "lodash.truncate";

const CampaignCard = ({
  id,
  title,
  shortDescription,
  imageUrls,
  category,
  goal,
  raised,
  deadline,
}) => {
  const percentage = Math.round((raised / goal) * 100);
  const daysLeft = calculateDaysLeft(deadline);

  const truncatedDesc = truncate(shortDescription, {
    length: 90,
    separator: " ",
    omission: "...",
  });

  return (
    <div className="border bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full transition-transform duration-200 hover:scale-[1.02]">
      <Link to={`/campaign/${id}`} className="block">
        {/* IMAGE */}
        <div className="relative">
          <img
            src={imageUrls?.[0]}
            alt={title}
            className="w-full h-60 object-cover"
          />
          <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-full shadow">
            {category}
          </span>
        </div>

        {/* TITLE & DESC */}
        <div className="px-4">
          <h2 className="text-gray-800 text-lg font-bold leading-tight my-2 line-clamp-2">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground mb-2 min-h-[60px] line-clamp-3">
            {truncatedDesc}
          </p>
        </div>
      </Link>

      <div className="px-2 mt-auto">
        {" "}
        {/* PROGRESS */}
        <div className="px-2">
          <div className="flex justify-between">
            <span className="text-gray-800 font-semibold">
              ${raised.toLocaleString()} Raised
            </span>
            <span className="text-gray-500 font-semibold">
              {percentage}% of ${goal.toLocaleString()}
            </span>
          </div>
          <Progress value={percentage} className="mt-1 mb-2" />
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <IoTimeOutline />
            <span>{daysLeft} Days Left</span>
          </div>
        </div>
        {/* BUTTON, FORM */}
        <div className="p-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="w-full bg-gray-800">Donate Now</Button>
            </DialogTrigger>
            <DialogContent>
              <DonationForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
