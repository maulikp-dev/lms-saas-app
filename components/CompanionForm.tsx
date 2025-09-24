"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

import { subjects } from "@/constants"

const formSchema = z.object({
    name: z.string().min(1, { error: "Name is required." }),
    subject: z.string().min(1, { error: "subject is required." }),
    topic: z.string().min(1, { error: "Topic is required." }),
    voice: z.string().min(1, { error: "Voice is required." }),
    style: z.string().min(1, { error: "Style is required." }),
    duration: z.string().min(1, { error: "Duration is required." }),
})

const CompanionForm = () => {

    // define form default values
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            subject: "",
            topic: "",
            voice: "",
            style: "",
            duration: "15"
        },
    })

    // eventhandler
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Campanion Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the companion name ex: Calculus King" {...field}
                                    className="input" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full input capitalize">
                                        <SelectValue placeholder="Enter the subject. ex: Math" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {subjects.map((subject, index) => <SelectItem value={subject} className="capitalize" key={subject + index}>{subject}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What should this companion teach?</FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter the topic you want to learn - ex: Derivatives" {...field}
                                    className="input" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="voice"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Voice</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full input capitalize">
                                        <SelectValue placeholder="Select voice" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="female" className="capitalize" >
                                            Female
                                        </SelectItem>
                                        <SelectItem value="male" className="capitalize" >
                                            Male
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="style"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Style</FormLabel>
                            <FormControl>
                                <Select
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    defaultValue={field.value}
                                >
                                    <SelectTrigger className="w-full input capitalize">
                                        <SelectValue placeholder="Select style" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="formal" className="capitalize" >
                                            Formal
                                        </SelectItem>
                                        <SelectItem value="casual" className="capitalize" >
                                            Casual
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="duration"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Estimated Duration in minutes</FormLabel>
                            <FormControl>
                                <Input type="number" placeholder="15" {...field}
                                    className="input" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="w-full cursor-pointer">Build your companion</Button>
            </form>
        </Form>
    )
}

export default CompanionForm