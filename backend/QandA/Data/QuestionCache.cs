﻿using System;
using QandA.Data.Models;
using Microsoft.Extensions.Caching.Memory;

namespace QandA.Data
{
	public class QuestionCache : IQuestionCache
	{
		private MemoryCache _cache { get; set; }

		public QuestionCache()
		{
			_cache = new MemoryCache(new MemoryCacheOptions
			{
				SizeLimit = 100
			});
		}

		private string GetCachKey(int questionId) =>
			$"Question-{questionId}";
		
		public QuestionGetSingleResponse Get(int questionId)
		{
			QuestionGetSingleResponse question;
			_cache.TryGetValue(GetCachKey(questionId), out question);
			return question;
		}

		public void Remove(int questionId)
		{
			_cache.Remove(GetCachKey(questionId));
		}

		public void Set(QuestionGetSingleResponse question)
		{
			var cacheEntryOptions = new MemoryCacheEntryOptions().SetSize(1);
			_cache.Set(GetCachKey(question.QuestionId), question, cacheEntryOptions);
		}
	}
}