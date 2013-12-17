---
layout: post
title: The Reality of Code
description: Coming to grips with code in the wild.
---

College does many things poorly. Perhaps nothing more poorly than preparing you for what code looks like in the *wild*.

###Academia

When in school, you learn about all of the building blocks of Computer Science. Variables, Arrays, Classes, Objects, you learn how they work. You use them repeatedly in reduced test cases and maybe you create your own moderately large application.

You are taught what the tools do and how they should be used. You are totally unprepared to see how they are **actually** used. You learn about OOP, S.O.L.I.D principles, unit-testing and all about writing modular code that is easy to maintain.

You learn to write and read code that looks like this:
<pre><code class="language-php">
class MyClass extends ParentClass {

	//dependency injected constructor
	public function __construct($emailConnection) {
		$this->email = $emailConnection;
	}

}
</code></pre>

But then, you get your first job.

###The Sad Reality

Now, there is a slight chance, depending on your area, language of choice and the specific company you end up working for, that this won't happen to you. However it is my prediction that most of you will end up staring at something similar to this:
<pre><code class="language-php">
}

//line 489 of a 2500 line file, loose file with functions strewn everywhere

//no namespaces, mystery meat parameters
function product_db_connector_array_merge_tool($id, $start, $end, $range, $topVar, $date, $apex) {
	require('db/tools/mysql/someconstants.php');
	require('db/helpers/mysql/otherconstants.php');
	require('db/helpers/fixed.php'); //what does this even do?

	//where are these variables even coming from?
	if($array_data_recursive_output['lastDate'] == $data_array_flush)
		return false;
}

//here we go again...
function product_db_connector_array_merge_helper($newId, $start, $range, $topVar, $date, $apex) {

</code></pre>

It's kind of like starting over. You learned all of these best practices, now you'll have to learn what 10 years of business decisions and compromise look like. You'll need a new toolkit to brace this type of project. You'll need to be able to use tools like <a href="http://beyondgrep.com/">Ack</a> to search through a big codebase quickly and <a href="http://git-scm.com/">git</a> to provide some commit context to specific code descisions that may make little to no sense.

###The Takeaway

It is super important to learn how to work with codebases like this as this is what many companies have to work with and you ( most likely ) need a job. However, it is also important that you don't forget where you came from. Keep striving towards that ideal and try to leave everyday knowing you brought the code one step closer to meeting it.

###There is Hope

Also keep in mind that many people have successfully conquered tech debt and behemoth codebases and come out the other side. Here are a few resources as you come to grips with **the reality of code**.

+ <a href="http://mikehadlow.blogspot.co.uk/2013/12/are-your-programmers-working-hard-or.html">Are Your Programmers Working Hard, Or Are They Lazy?</a>
+ <a href="http://paul-m-jones.com/archives/2667">It Was Like That When I Got Here: Steps Toward Modernizing a Legacy Codebase</a>