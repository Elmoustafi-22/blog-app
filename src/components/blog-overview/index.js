'use client'
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";

function BlogOverview() {
    const [openBlogDialog, setOpenBlogDialog] = useState(false)
    return (
      <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-green-500 via-green-600 to-blue-700 p-6">
        <div className="font-poppins font-semibold text-slate-50">
          <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
        </div>
        <div className="font-poppins font-semibold text-slate-50">
          Add New Blog section
        </div>
        <Dialog open={openBlogDialog} onOpenChange={setOpenBlogDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Blog</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                  Title
                </Label>
                <Input id="title" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Description
                </Label>
                <Input id="description"  className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button type="button">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );
}

export default BlogOverview;