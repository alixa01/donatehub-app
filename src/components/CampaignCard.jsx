import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { IoTimeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import DonationForm from "@/components/DonationForm";
import { calculateDaysLeft } from "@/utils/daysLeft";

const CampaignCard = ({
  id,
  title,
  shortDescription,
  imageUrl,
  category,
  goal,
  raised,
  deadline,
}) => {
  const percentage = Math.round((raised / goal) * 100);
  const daysLeft = calculateDaysLeft(deadline);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
      <Link to={`/${id}`} className="block">
        {/* IMAGE */}
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-60 object-cover"
          />
          <span className="absolute top-2 right-2 bg-black text-white text-xs px-3 py-1 rounded-full shadow">
            {category}
          </span>
        </div>

        {/* TITLE & DESC */}
        <div className="p-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-gray-600 mt-2">{shortDescription}</p>
        </div>
      </Link>

      {/* PROGRESS */}
      <div className="px-2">
        <div className="flex justify-between">
          <span className="font-semibold">
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
            <Button className="w-full bg-slate-900 text-white hover:bg-slate-700">
              Donate Now
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DonationForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CampaignCard;
