'use client'
import { useEffect, useState } from "react";
import AddNewBlog from "../add-new-blog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import {Trash2} from 'lucide-react'
import { useRouter } from "next/navigation";
import { Label } from "../ui/label";

const initialBlogFormData = {
    title: '',
    description : ''
}

function BlogOverview({blogList}) {
    const [openBlogDialog, setOpenBlogDialog] = useState(false)
    const [loading, setLoading] = useState(false);
    const [blogFormData, setBlogFormData] = useState(initialBlogFormData)
    const [currentEditedBlogID, setCurrentEditedBlogID] = useState(null)

    const router = useRouter();

    useEffect(() => {
      router.refresh()
    }, [])

    async function handleSaveBlogData(){
        try{
            setLoading(true)
            const apiResponse = currentEditedBlogID !== null ?
            await fetch(`/api/update-blog?id=${currentEditedBlogID}`, {
              method: 'PUT',
              body : JSON.stringify(blogFormData)
            })
            : await fetch('/api/add-blog', {
                method: 'POST',
                body: JSON.stringify(blogFormData)
            })

            const result = await apiResponse.json()
            if (result?.success) {
                setBlogFormData(initialBlogFormData)
                setOpenBlogDialog(false)
                setLoading(false)
                setCurrentEditedBlogID(null)
                router.refresh()
            }

            console.log(result)
        } catch(error){
            console.log(error)
            setLoading(false)
            setBlogFormData(initialBlogFormData)
        }
    }

    async function handleDeleteBlogById(Id){
      try {
        const apiResponse = await fetch(`/api/delete-blog?id=${Id}`, {
          method: 'DELETE',
        })
        const result = await apiResponse.json()

        if (result?.success) router.refresh()
      } catch (e) {
        console.log(e)
      }
    }

    async function handleEdit(blog) {
      setCurrentEditedBlogID(blog?._id)
      setBlogFormData({
        title: blog?.title,
        description: blog?.description
      })
      setOpenBlogDialog(true)

    }

    return (
      <div className="min-h-screen flex flex-col gap-10 bg-gradient-to-r from-green-500 via-green-600 to-blue-700 p-6">
        <AddNewBlog
          openBlogDialog={openBlogDialog}
          setOpenBlogDialog={setOpenBlogDialog}
          loading={loading}
          setLoading={setLoading}
          blogFormData={blogFormData}
          setBlogFormData={setBlogFormData}
          handleSaveBlogData={handleSaveBlogData}
          currentEditedBlogID={currentEditedBlogID}
          setCurrentEditedBlogID={setCurrentEditedBlogID}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {blogList && blogList.length > 0
            ? blogList.map((blogItem) => (
                <Card key={blogItem._id} className="p-5">
                  <CardContent>
                    <CardTitle className="mb-5">{blogItem.title}</CardTitle>
                    <CardDescription>{blogItem.description}</CardDescription>
                    <div className="mt-3 flex items-center justify-between">
                      <Button onClick={() =>handleEdit(blogItem)}>Edit</Button>
                      <Button onClick={() => handleDeleteBlogById(blogItem._id)}>
                        <Trash2 />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            : <Label className="text-3xl font-extrabold">No Blog found! Please add one</Label>}
        </div>
      </div>
    );
}

export default BlogOverview;