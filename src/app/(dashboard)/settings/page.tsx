"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Settings</h1>
        <p className="text-slate-500 mt-1">Manage your account and preferences.</p>
      </div>

      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="ai">AI Settings</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="profile" className="m-0 space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details here.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="bg-indigo-100 text-indigo-700 text-xl">SF</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Change Avatar</Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="Student User" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="student@example.com" disabled />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="border-t border-slate-100 pt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700">Save Changes</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="m-0 space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>Study Preferences</CardTitle>
                <CardDescription>Customize your learning experience.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label>Default Pomodoro Focus Time (minutes)</Label>
                    <Input type="number" defaultValue="25" />
                  </div>
                  <div className="space-y-2">
                    <Label>Default Pomodoro Break Time (minutes)</Label>
                    <Input type="number" defaultValue="5" />
                  </div>
              </CardContent>
               <CardFooter className="border-t border-slate-100 pt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700">Save Preferences</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="ai" className="m-0 space-y-6">
            <Card className="border-slate-200">
              <CardHeader>
                <CardTitle>AI Configuration</CardTitle>
                <CardDescription>Manage your AI integrations and API keys.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="space-y-2">
                    <Label htmlFor="api_key">Google Gemini API Key</Label>
                    <Input id="api_key" type="password" placeholder="AIzaSy..." />
                    <p className="text-xs text-slate-500 mt-1">
                      Leave blank to use Demo Mode. Your key is only used locally and not stored on our servers.
                    </p>
                  </div>
              </CardContent>
              <CardFooter className="border-t border-slate-100 pt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700">Save AI Settings</Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}
