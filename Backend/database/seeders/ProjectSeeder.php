<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('portproject')->insert([
            "title"=> "Covid Application",
            "description"=> "Application that use react-native framework to build mobile application",
            "url"=> "https://firebasestorage.googleapis.com/v0/b/poomdatatest.appspot.com/o/project1.png?alt=media&token=f4f4bbaa-1d65-4c99-b8b0-86808f4b1551",
            "git"=>"https://github.com/Covid19Piya/CovidAPP"
        ]);
        DB::table('portproject')->insert([
            "title"=> "Todolist Application",
            "description"=> "Application that use react-native framework to build mobile application",
            "url"=> "https://firebasestorage.googleapis.com/v0/b/poomdatatest.appspot.com/o/todolist.png?alt=media&token=ee7497ff-ed6e-4673-b3fe-464e97f96112",
            "git"=>"https://github.com/SF340-Projecto/todolistapp"
        ]);
        DB::table('portproject')->insert([
            "title"=> "Portfolio Website",
            "description"=> "Application that use react framework redux to create front-end and use Laravel to create rest api",
            "url"=> "https://firebasestorage.googleapis.com/v0/b/poomdatatest.appspot.com/o/project6.png?alt=media&token=9a1f4c8a-a304-4991-bd63-cf3635b501a4",
            "git"=>"https://github.com/CN334WebDev/6210742075"
        ]);
        DB::table('portproject')->insert([
            "title"=> "Moc Application",
            "description"=> "Application that use react-native framework redux to create front-end and use Laravel to create rest api",
            "url"=> "https://firebasestorage.googleapis.com/v0/b/poomdatatest.appspot.com/o/project2.png?alt=media&token=314bbae6-5e0f-48b4-9463-804c8aaffb84",
            "git"=>"https://github.com/SF342/MOC"
        ]);

        DB::table('portfolio_skill')->insert([
            "skill"=> "React",
            "skill1"=> "React-native",
            "skill2"=> "Laravel",
            "skill3"=> "Python",
            "skill4"=> "JavaScript",
            "skill5"=> "HTML",
            "skill6"=> "CSS",
            "skill7"=> "PHP",
            "skill8"=> "MySQL",
            "skill9"=> "Swift",
        ]);

        DB::table('portfolio')->insert([
            "name"=> "Jirawat",
            "age"=> "21",
            "gender"=> "Male",
            "email"=> "jirawat.chai@dome.tu.ac.th",
            "phone_number"=> "0820095962",
            "address"=> "Tambon Bang Phut, Amphoe Mueang PathumThani Chang Wat Pathum Thani 12000",
            "nation"=> "Thai",
            "photo"=> "https://firebasestorage.googleapis.com/v0/b/poomdatatest.appspot.com/o/118050981_2540453369580165_4269954561638854198_n.jpg?alt=media&token=4a93f635-695d-452f-bcde-e3d2864527d6",
            "gpa"=> "3.48",
            "about_me"=> "Fullstack Developer and Mobile Developer",
            "skill"=> "-",
            "project"=> "-",
            "viedolink"=> "-",
            "experience"=> "-"
        ]);
    }
}
