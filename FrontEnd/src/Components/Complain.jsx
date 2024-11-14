
import { Button, FloatingLabel, Textarea, Label, Select} from "flowbite-react";

const Complain = () => {
  return (
    <form className="flex max-w-md flex-col gap-4">

<div className="flex gap-4">
{/* Name Field */}
<div className="flex-1">
  <div className="mb-2 block">
    <FloatingLabel variant="outlined" label="Name" type="text" required />
  </div>
</div>
{/* Roll Number Field */}
<div className="flex-1">
  <div className="mb-2 block">
    <FloatingLabel variant="outlined" label="Roll Number" type="text" required />
  </div>
</div>
</div>

<div className="flex gap-4">
{/* Email Field */}
<div className="flex-1">
  <div className="mb-2 block">
    <FloatingLabel variant="outlined" label="Email" type="email" required />
  </div>
</div>

{/* Phone Number Field */}
<div className="flex-1">
  <div className="mb-2 block">
    <FloatingLabel variant="outlined" label="Phone Number" type="phone" required />
  </div>
</div>
</div>

{/*Drop Down Field For hostel*/}
<div className="flex gap-4">
    <div className="flex-1">
    <Select id="hostels" required>
    <option>Your Hostel</option>
    <option>BH1</option>
    <option>BH2</option>
    <option>BH3</option>
    <option>BH4</option>
    <option>B3 (Girls Hostel)</option>
    </Select>
    </div>

    <div className="flex-1">
  <div className="mb-2 block">
    <FloatingLabel variant="outlined" label="Room Number" type="text" required />
  </div>
</div>

</div>

<div className="flex gap-4">
<div className="flex-1">
    <Select id="complaint" required>
    <option>Complaint Category</option>
    <option>Room Maintenance</option>
    <option>Washroom Facilities</option>
    <option>Laundry Facilities</option>
    <option>Mess and Food</option>
    <option>Internet/Wi-Fi</option>
    <option>Lift/Elevator</option>
    <option>Other</option>
    </Select>
    </div>

    <div className="flex-1">
    <Select id="priority" required>
        <option>Priority</option>
    <option>High</option>
    <option>Medium</option>
    <option>Low</option>
    </Select>
    </div>
</div>

{/* Complaint Box */}
<div className="max-w-md">
<div className="mb-2 block">
  <Label htmlFor="comment" value="Your Issue" />
</div>
<Textarea
  id="comment"
  placeholder="Explain the Issue you are facing..."
  required
  rows={4}
/>
</div>

{/* Submit Button */}
<Button type="submit">Submit</Button>
</form>
  )
}

export default Complain
