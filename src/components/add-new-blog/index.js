'use client'
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";


export default function AddNewBlog({
  setOpenBlogDialog,
  openBlogDialog,
  loading,
  blogFormData,
  setBlogFormData,
  handleSaveBlogData,
}) {
  return (
    <>
      <div className="font-poppins font-semibold text-slate-50">
        <Button onClick={() => setOpenBlogDialog(true)}>Add New Blog</Button>
      </div>

      <Dialog open={openBlogDialog} onOpenChange={() => {
          setOpenBlogDialog(false)
          setBlogFormData({
            title: '',
            description: '',
          })
        }
      }>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Blog</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Title
              </Label>
              <Input
                name="title"
                placeholder="Enter blog title"
                value={blogFormData.title}
                onChange={(e) =>
                  setBlogFormData({
                    ...blogFormData,
                    title: e.target.value,
                  })
                }
                id="title"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                name="description"
                value={blogFormData.description}
                onChange={(e) =>
                  setBlogFormData({
                    ...blogFormData,
                    description: e.target.value,
                  })
                }
                id="description"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSaveBlogData} type="button">
              {
                loading ? 'Saving changes...' : 'Save changes'
              }
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}